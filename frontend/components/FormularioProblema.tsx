"use client";

import React, { useState } from "react";

export default function FormularioProblema() {
  // Estados para guardar o que o usuário digita
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [gravidade, setGravidade] = useState("");

  // Função que roda quando o botão de enviar é clicado
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue
    
    // Testando no console por enquanto
    console.log("Dados do Problema:", { titulo, categoria, gravidade });
    alert("Problema reportado! (Olhe o console do navegador)");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6 mt-10 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Reportar Problema</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo de Texto: Título */}
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-blue-700">Título do Problema <span className="text-red-500">*</span>
            </label>
          <input
            id="titulo"
            type="text"
            required
            className="text-gray-900 mt-1 block w-full rounded-md border-gray-300 border shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 outline-none"
            placeholder="Ex: Lâmpada queimada na praça"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        {/* Menu de Seleção: Categoria */}
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-blue-700">Categoria <span className="text-red-500">*</span>
            </label>
          <select
            id="categoria"
            required
            className="text-gray-900 mt-1 block w-full rounded-md border-gray-900 border shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 outline-none bg-white"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="buraco">Buraco na Via</option>
            <option value="iluminacao">Falta de Iluminação</option>
            <option value="lixo">Acúmulo de Lixo</option>
            <option value="vandalismo">Vandalismo</option>
          </select>
        </div>

        {/* Menu de Seleção: Gravidade */}
        <div>
          <label htmlFor="gravidade" className="block text-sm font-medium text-blue-700">Nível de Gravidade <span className="text-red-500">*</span>
            </label>
          <select
            id="gravidade"
            required
            className="text-gray-900 mt-1 block w-full rounded-md border-gray-900 border shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 outline-none bg-white"
            value={gravidade}
            onChange={(e) => setGravidade(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="baixa">Baixa (Pode esperar)</option>
            <option value="media">Média (Atenção necessária)</option>
            <option value="alta">Alta (Urgente/Perigo)</option>
          </select>
        </div>

        {/* Upload de Imagem */}
        <div>
          <label htmlFor="foto" className="block text-sm font-medium text-blue-700 mb-1">Foto (Opcional)</label>
          <input
            id="foto"
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}