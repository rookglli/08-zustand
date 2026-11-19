import type { Metadata } from 'next';

import css from './CreateNote.module.css';

export const metadata: Metadata = {
  title: 'Create Note | NoteHub',
  description: 'Create a new personal note in NoteHub.',

  openGraph: {
    title: 'Create Note | NoteHub',
    description: 'Create a new personal note in NoteHub.',
    url: 'https://notehub.com/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Create a new note in NoteHub',
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        {/* Здесь подключим NoteForm на следующем шаге */}
      </div>
    </main>
  );
}
