'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { HEADER_INFO } from '@/lib/data'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="font-sans text-2xl font-medium text-black uppercase dark:text-white"
        >
          {HEADER_INFO.name}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {HEADER_INFO.title}
        </TextEffect>
      </div>
    </header>
  )
}
