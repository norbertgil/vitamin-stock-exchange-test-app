import { AppBar, Autocomplete, CircularProgress, Container, TextField, Toolbar } from '@mui/material'
import useSearchDatasets from './useSearchDatasets'

export const DatasetsSearchBar = () => {
  const { value, setDataset, query, setQuery, datasets, datasetCode } = useSearchDatasets()

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          {!datasetCode ? <CircularProgress color="info" size="small" /> : (
            <Autocomplete
              value={value}
              onChange={(event: any, newValue: string | null) => {
                const dataset = datasets?.find((item: any) => item.name === newValue)
                if (dataset) {
                  setDataset(dataset)
                }
              }}
              size="small"
              style={{ flex: 1/2}}
              disableClearable
              inputValue={query}
              onInputChange={(event, newInputValue) => {
                setQuery(newInputValue)
              }}
              id="company"
              options={datasets?.map((item: any) => item.name) || []}
              sx={{width: 300}}
              renderInput={(params) => <TextField {...params} label="Company"/>}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
