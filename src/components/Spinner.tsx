import React from 'react'
import { ClipLoader } from 'react-spinners'

type Props = {
    color: string,
    loading: boolean
}

const override = {
    display: 'block',
    margin: '100px auto'
}


const Spinner = ({color, loading} : Props) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
      aria-testid='loader'
    />
  )
}

export default Spinner