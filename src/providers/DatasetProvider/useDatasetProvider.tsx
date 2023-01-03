import { useState } from 'react'

const useDatasetProvider = () => {
  const [datasetCode, setDatasetCode] = useState<string | undefined>()

  return {
    datasetCode,
    setDatasetCode,
  }
}

export default useDatasetProvider
