// ** Icons Imports
import { Search } from 'react-feather'
import illustration from '../assets/images/main.png'

// ** Reactstrap Imports
import { CardBody, Form, Input, InputGroup, InputGroupText, Col } from 'reactstrap'

const SearchApp = ({ searchTerm, setSearchTerm, handleFilter }) => {
  // ** Handle input change event
  const onChange = e => {
    // If handleFilter prop is provided, call it with the event
    if (handleFilter) {
      handleFilter(e)
    } else {
      // Otherwise, update the searchTerm state with the input value
      setSearchTerm(e.target.value)
    }
  }

  return (
    <div>
      <div className='text-center'>
        <img className='text-center' src={illustration} alt='illustration' width='250' />
      </div>
      <CardBody className='text-center d-flex flex-wrap justify-content-center'>
        <Col sm='6'>
          <Form onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
              {/* Input field for searching */}
              <Input value={searchTerm} onChange={e => onChange(e)} placeholder='Ask a question...' />
            </InputGroup>
          </Form>
        </Col>
      </CardBody>
    </div>
  )
}

export default SearchApp
