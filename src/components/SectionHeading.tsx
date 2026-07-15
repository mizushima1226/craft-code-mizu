type SectionHeadingProps = {
  id?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  id,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {id ? (
        <h2 id={id} className="section-heading">
          {title}
        </h2>
      ) : (
        <h2 className="section-heading">{title}</h2>
      )}
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
