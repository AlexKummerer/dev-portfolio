import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, InputText, Textarea, FloatLabel, Button, Toast],
  providers: [MessageService],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private messageService = inject(MessageService);

  sending = signal(false);
  sent = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    honeypot: [''],
  });
  onSubmit() {
    if (this.form.controls.honeypot.value) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    const { honeypot, ...data } = this.form.getRawValue();

    this.http.post('/api/contact', data).subscribe({
      next: () => {
        this.sending.set(false);
        this.sent.set(true);
        this.form.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Gesendet',
          detail: 'Danke für deine Nachricht!',
        });
      },
      error: () => {
        this.sending.set(false);
        this.messageService.add({
          severity: 'error',
          summary: 'Fehler',
          detail: 'Da ist etwas schiefgelaufen.',
        });
      },
    });
  }
}
