import styled from 'styled-components'
import { categoryItems } from '../Data/dummyData'
import CategoryItem from './CategoryItem'

const Container = styled.div`
display: flex;
padding: 20px;
`

function Categories() {
  return (
    <Container>
        {categoryItems.map(item=>
            <CategoryItem key={item.id} item={item}/>
        )}
    
    </Container>
    
  )
}

export default Categories