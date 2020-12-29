import { useContext, useEffect, useState, FormEvent } from 'react'
import userContext from 'context/userContext'
import styles from 'styles/drashboard/Profile.module.scss'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DateFnsUtils from '@date-io/date-fns'
// import moment from 'moment'

import HistoryIcon from '@material-ui/icons/History'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

export default function Profile () {
  const { user } = useContext(userContext)
  const [disabled, setDisabled] = useState(true)

  const [showPassword, setShowPassword] = useState(false)

  const [nickname, setNickname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date())

  // const [errorNickname, setErrorNickname] = useState('')
  // const [errorFirstname, setErrorFirstname] = useState('')
  // const [errorLastname, setErrorLastname] = useState('')
  // const [errorEmail, setErrorEmail] = useState('')
  // const [errorPassword, setErrorPassword] = useState('')
  // const [errorDateOfBirth, setErrorDateOfBirth] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    console.log(e)
  }

  const handleReset = () => {
    setNickname(user.nickname)
    setFirstname(user.firstname)
    setLastname(user.lastname)
    setEmail(user.email)
    setPassword(user.password)
    setDateOfBirth(new Date(user.dateOfBirth))
  }

  useEffect(() => {
    handleReset()
  }, [])

  return (<>
    <Avatar className={styles.avatar}>{`${user.firstname.substr(0, 1)}${user.lastname.substr(0, 1)}`}</Avatar>
    <Typography variant='h5' component='h1' color='textPrimary'>{`${user.firstname} ${user.lastname}`}</Typography>
    <Typography variant='h6' component='h2' color='textSecondary'>{`${user.nickname}#${user.hash}`}</Typography>

    <Box boxShadow={5} borderRadius={10} className={styles.box}>
      <ValidatorForm onSubmit={handleSubmit} className={styles.form}>
        <Grid container spacing={3} className={styles.grid}>
          <Grid item xs={12}>
            <Typography variant='h5' component='h3' color='textSecondary'>General Information</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextValidator
              disabled={disabled}
              name="firstname"
              label="Firstname"
              value={firstname}
              variant="filled"
              fullWidth
              onChange={(e) => setFirstname(`${(e.target as HTMLInputElement).value}`)}
              validators={['required', 'minStringLength:4']}
              errorMessages={['Firstname is required', 'Firstname must be at least 4 characters']}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextValidator
              disabled={disabled}
              name="lastname"
              label="Lastname"
              value={lastname}
              variant="filled"
              fullWidth
              onChange={(e) => setLastname(`${(e.target as HTMLInputElement).value}`)}
              validators={['required', 'minStringLength:4']}
              errorMessages={['Lastname is required', 'Lastname must be at least 4 characters']}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextValidator
              disabled={disabled}
              name="nickname"
              label="Nickname"
              value={nickname}
              variant="filled"
              fullWidth
              onChange={(e) => setNickname(`${(e.target as HTMLInputElement).value}`)}
              validators={['required', 'minStringLength:4']}
              errorMessages={['Nickname is required', 'Nickname must be at least 4 characters']}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextValidator
              disabled={disabled}
              name="email"
              label="Email"
              value={email}
              variant="filled"
              fullWidth
              onChange={(e) => setEmail(`${(e.target as HTMLInputElement).value}`)}
              validators={['required', 'isEmail']}
              errorMessages={['Email is required', 'Email is not valid']}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextValidator
              type={showPassword ? 'text' : 'password'}
              disabled={disabled}
              name="password"
              label="Password"
              value={password}
              variant="filled"
              fullWidth
              onChange={(e) => setPassword(`${(e.target as HTMLInputElement).value}`)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {showPassword ? <Visibility color='action'/> : <VisibilityOff color='action'/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              validators={['required', 'minStringLength:8']}
              errorMessages={['Password is required', 'Password must be at least 8 characters']}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disabled={disabled}
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                id="dateOfBirth"
                inputVariant='filled'
                label="Date Of Birth"
                value={dateOfBirth}
                fullWidth
                onChange={(date: Date | null) => { setDateOfBirth(date) }}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
                // error={Boolean(errorDateOfBirth)}
                // helperText={` ${errorDateOfBirth}`}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant='h5' component='h3' color='textSecondary'>Private Information</Typography>
          </Grid> */}
          <Grid item xs={12}>
            <Button
              className={styles.button}
              type='submit'
              variant='contained'
              color='primary'
              disabled={disabled}
              startIcon={<SaveIcon/>}
            >
              Save
            </Button>
            <Button
              className={styles.button}
              variant='contained'
              color='default'
              startIcon={ disabled ? <EditIcon/> : <HistoryIcon/> }
              onClick={() => { handleReset(); setDisabled(!disabled) }}
            >
              { disabled ? 'Edit' : 'Reset' }
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </Box>
  </>)
}
