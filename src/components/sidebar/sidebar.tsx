'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface Props {
  items: {
    name: string
    icon: any
    path: string
  }[]
  menu: boolean
  setMenu: (menu: boolean) => void
}

export default function Sidebar({ items, menu, setMenu }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavigation = (link: string, isMobile: boolean = false) => {
    router.push(link)
    if (isMobile) setMenu(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* Mobile overlay when sidebar is open */}
      {menu && (
        <div
          className="fixed inset-0 bg-black/40 z-30 sm:hidden transition-opacity duration-300 ease-in-out"
          onClick={() => setMenu(false)}
        />
      )}

      <div
        className={cn(
          'mt-14 fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out',
          'bg-slate-900 border-r border-slate-800 shadow-lg',
          menu ? 'w-44' : 'w-16',
          'sm:translate-x-0 transform',
          menu ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-3 border-b border-slate-800">
            {menu && (
              <h2 className="text-lg font-semibold text-indigo-400 transition-opacity duration-200 ease-in-out"></h2>
            )}
            <button
              onClick={() => setMenu(!menu)}
              className={cn(
                'p-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-slate-200 transition-colors duration-200',
                !menu && 'mx-auto'
              )}
            >
              {menu ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>

          {/* Navigation items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <div className="px-1 space-y-1">
              {items.map((item) => {
                const isActive =
                  pathname === item.path ||
                  (pathname.includes('/assignments') &&
                    item.name === 'Assignments')

                return (
                  <TooltipProvider key={item.path} delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className={cn(
                            'w-full flex items-center gap-3 px-2 py-2.5 rounded-md transition-all duration-200 group',
                            'hover:scale-[1.01] active:scale-[0.98]',
                            isActive
                              ? 'bg-indigo-600 text-white'
                              : 'hover:bg-slate-800 text-slate-300 hover:text-slate-200'
                          )}
                        >
                          <div
                            className={cn(
                              'text-xl flex items-center justify-center min-w-8',
                              isActive
                                ? 'text-white'
                                : 'text-slate-300 group-hover:text-slate-200'
                            )}
                          >
                            {item.icon}
                          </div>

                          {menu && (
                            <span className="font-medium truncate transition-opacity duration-200 ease-in-out">
                              {item.name}
                            </span>
                          )}
                        </button>
                      </TooltipTrigger>
                      {!menu && (
                        <TooltipContent side="right" className="bg-slate-800 text-slate-200">
                          {item.name}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}