import React from 'react'
import { TextField ,Button , Paper} from '@mui/material'

function Form() {
  return (
    <Paper>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="text">Add</Button>
    </Paper>
  )
}

export default Form