import { useEffect, useRef } from 'react'
import type { BotProps } from '@daisy-plus/embed'

type Props = BotProps & {
  style?: React.CSSProperties
  className?: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'daisy-fullinterface': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class?: string }
    }
  }
}

type FullPageChatElement = HTMLElement & Props

export const FullPageChat = ({ style, className, ...assignableProps }: Props) => {
  const ref = useRef<FullPageChatElement | null>(null)

  useEffect(() => {
    ;(async () => {
      await import('@daisy-plus/embed/dist/web.js')
    })()
  }, [])

  useEffect(() => {
    if (!ref.current) return
    Object.assign(ref.current, assignableProps)
  }, [assignableProps])

  return <daisy-fullinterface ref={ref} style={style} class={className} />
}
