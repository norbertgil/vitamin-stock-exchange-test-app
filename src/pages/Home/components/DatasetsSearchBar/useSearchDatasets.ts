import { useContext, useEffect, useState } from 'react'
import { DatasetContext } from '../../../../providers/DatasetProvider'
import { useQuery } from 'react-query'
import { DatasetsService, IDataset } from '../../../../providers/QueryProvider/services/datasets.service'

const useSearchDatasets = () => {
  const datasetContext = useContext(DatasetContext)
  const [value, setValue] = useState<any>(null)
  const [query, setQuery] = useState('')
  const companiesQuery = useQuery([DatasetsService.serviceName, query], () => DatasetsService.getDatasets(query), {
    select: data => {
      return data.data.datasets
    },
  })

  const setDataset = (dataset: IDataset) => {
    setValue(dataset.name)
    datasetContext.setDatasetCode(dataset.dataset_code)
  }

  useEffect(() => {
    if (companiesQuery.isFetched && companiesQuery.data && companiesQuery.data.length > 0 && !value) {
      setDataset(companiesQuery.data[0])
    }
  }, [companiesQuery.data, companiesQuery.isFetched])

  return {
    query,
    setQuery,
    value,
    datasets: companiesQuery.data,
    setDataset,
    datasetCode: datasetContext.datasetCode
  }
}

export default useSearchDatasets
