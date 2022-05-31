import { Circles } from  'react-loader-spinner'
import styled from 'styled-components'

export default function Loader(){
    return (
        <Loading>
            <Circles  height= '200'
      width= '200' color= '#0020FF' />
        </Loading>
    )
}

const Loading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
`