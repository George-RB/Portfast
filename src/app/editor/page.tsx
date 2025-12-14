'use client';
import { useState } from 'react';
import Button from '../components/ui/Button';
import ButtonLink from '../components/ui/ButtonLink';

interface FormData {
  name: string;
  bio: string;
  skills: string;
}

export default function Editor() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    bio: '',
    skills: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные:', formData);
    localStorage.setItem('portfolio', JSON.stringify(formData));
    alert('Сохранено!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />

        <textarea
          placeholder="О себе"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32"
        />

        <input
          type="text"
          placeholder="Навыки (через запятую)"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button>Сохранить портфолио</Button>
          <ButtonLink href="/">На главную</ButtonLink>
        </div>
      </form>
    </div>
  );
}
