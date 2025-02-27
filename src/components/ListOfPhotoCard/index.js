import React from 'react'
import { PhotoCard } from '../PhotoCard'
import db from '../../../api/db.json'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {db.photos.map(photo =>
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      )}
    </ul>
  )
}