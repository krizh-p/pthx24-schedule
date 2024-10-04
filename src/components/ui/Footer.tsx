import { LucideGithub, LucideLinkedin } from 'lucide-react'
import React from 'react'

const SocialLink = ({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 fill-zinc-700 transition group-hover:fill-gray-100 dark:group-hover:fill-gray-200" />
    </a>
  )
}

const MinFooter = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-5 border-t border-gray-900/5 pt-8 sm:flex-row dark:border-white/5">
      <p className="text-xs text-gray-600 dark:text-gray-100">
      Made with ❤️ by Krishna P.
      </p>
      <div className="flex gap-4">
        <SocialLink href="https://linkedin.com/in/krizhp" icon={LucideLinkedin}>
          LinkedIn
        </SocialLink>
        <SocialLink href="https://github.com/krizh-p" icon={LucideGithub}>
          GitHub
        </SocialLink>
      </div>
    </div>
  )
}

export default MinFooter
