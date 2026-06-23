import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importação do HttpClient

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FaIconComponent, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;

  private fb = inject(FormBuilder);
  private http = inject(HttpClient); // Injeção do HttpClient para envio do formulário

  formContact = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensage: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]],
  });

  // Estados de controle para a interface do usuário
  enviando = false;
  sucesso = false;
  erro = false;

  onSubmit() {
    if (this.formContact.valid) {
      this.enviando = true;
      this.sucesso = false;
      this.erro = false;

      const dados = this.formContact.getRawValue();

      // Utilizando um serviço gratuito como Formspree para receber no e-mail
      this.http.post('https://formspree.io/f/mzdlzndj', dados).subscribe({
        next: () => {
          this.sucesso = true;
          this.enviando = false;
          this.formContact.reset();
        },
        error: (err) => {
          this.erro = true;
          this.enviando = false;
          console.error('Erro ao enviar formulário:', err);
        },
      });
    } else {
      this.formContact.markAllAsTouched();
    }
  }
}
