import React, { createContext, PropsWithChildren, useMemo } from 'react'
import useDatasetProvider from './useDatasetProvider'

export const DatasetContext = createContext<ICompanyContextProps>({
  datasetCode: undefined,
  setDatasetCode: (code: string) => {},
})

const DatasetProvider = (props: PropsWithChildren<any>) => {
  const { datasetCode, setDatasetCode } = useDatasetProvider()
  const value = useMemo(
    () => ({
      datasetCode,
      setDatasetCode,
    }),
    [datasetCode],
  )

  return <DatasetContext.Provider value={value}>{props.children}</DatasetContext.Provider>
}

export default DatasetProvider
