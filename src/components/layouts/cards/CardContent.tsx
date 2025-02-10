import { ReactNode } from 'react'

interface CardContentComponent {
  title?: string
  actions?: ReactNode
  children?: ReactNode
}
export function CardContent({
  title,
  actions,
  children
}: CardContentComponent) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title flex justify-between">
          <h1>{title}</h1>
          <div className="card-actions">{actions}</div>
        </div>
        {children}
      </div>
    </div>
  )
}
