import { ReactNode, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import BookDemoModal from './BookDemoModal'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [hasSubmittedDemo, setHasSubmittedDemo] = useState(false)

  /* -------------------------------------------------
     AUTO OPEN LOGIC
     - First open after 10s
     - Reopen every 10s if closed
     - Stop forever after submit
  -------------------------------------------------- */
  useEffect(() => {
    if (hasSubmittedDemo) return

    const timer = setTimeout(() => {
      setIsDemoOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [isDemoOpen, hasSubmittedDemo])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />

      {/* Demo Modal */}
      <BookDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onSubmitted={() => setHasSubmittedDemo(true)}
      />
    </div>
  )
}
