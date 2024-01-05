import cn from 'classnames'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props
  console.log(source)
  const image = source ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <CldImage
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt=""
        src={source.public_id}
        sizes="100vw"
        priority={priority}
        tint="70:blue:green:purple"
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
