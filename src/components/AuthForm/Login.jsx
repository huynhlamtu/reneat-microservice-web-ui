import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const { handleLogin, isLoggingIn } = useLogin();

  return (
    <>
      <Input
        placeholder='Email'
        type='email'
        fontSize={"14"}
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs, email: e.target.value})}
      />

      <InputGroup>
        <Input
          placeholder='Password'
          type={showPassword ? 'text' : 'password'}
          fontSize={"14"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({...inputs, password: e.target.value})}
        />

        <InputRightElement h={"full"}>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}
        isLoading={isLoggingIn}
        onClick={() => handleLogin(inputs)}
      >
        Log in
      </Button>
    </>
  )
}

export default Login