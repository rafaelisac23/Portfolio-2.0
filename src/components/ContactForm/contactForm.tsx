import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("service_id", "service_ay5ctki");
    formData.append("template_id", "template_h8dfcyi");
    formData.append("user_id", "_xGjOtceL8AD0OFUb");

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        alert("Mensagem enviada com sucesso!");
        formRef.current.reset();
      } else {
        const errorText = await response.text();
        alert("Erro ao enviar: " + errorText);
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-[300px] sm:w-[400px] mx-auto p-4 bg-white rounded shadow space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Entre em Contato</h2>

      <input
        type="text"
        name="from_name"
        placeholder="Seu nome"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        name="reply_to"
        placeholder="Seu e-mail"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Sua mensagem"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full bg-gray-950 text-white py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}
