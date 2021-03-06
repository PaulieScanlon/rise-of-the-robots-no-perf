import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import ContentfulRichTech from '../components/contentful-rich-text'

import FormBot from '../robots/form-bot'

const NotFoundSection = () => {
  const { contentfulNotFoundSection } = useStaticQuery(graphql`
    {
      contentfulNotFoundSection {
        title
        description {
          raw
        }
        border {
          title
          file {
            details {
              image {
                width
                height
              }
            }
          }
          svg {
            dataURI
          }
        }
      }
    }
  `)

  const { title, description, border } = contentfulNotFoundSection

  return (
    <div className="grid gap-0">
      <div className="relative form-image flex items-center justify-center">
        <img
          src={border.svg.dataURI}
          alt={border.title}
          width={border.file.details.image.width}
          height={border.file.details.image.height}
          className="form-border"
        />

        <FormBot hasError={true} />
      </div>
      <div className="grid gap-8 text-center mx-auto max-w-section">
        <div className="grid gap-2">
          <h1 className="text-2xl md:text-3xl">{title}</h1>
          <ContentfulRichTech richText={description} />
        </div>
        <div className="flex gap-4 justify-center ">
          <Link to="/" className="button button-ghost">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundSection
