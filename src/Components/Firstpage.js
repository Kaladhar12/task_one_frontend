// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components
import Header from './Headerpage'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardImg } from 'reactstrap'

const Firstpage = () => {
    // ** States
    const [data, setData] = useState(null),
        [searchTerm, setSearchTerm] = useState('')

    // ** Fetching data from API
    useEffect(() => {
        axios.get('http://localhost:3010/books').then(res => setData(res.data))
    }, [])

    // ** Render individual card component
    const Content = ({ item }) => (
        <Col key={item.id} md='4' sm='4'>
            <Card>
                <Link className='text-decoration-none btn' to={`/Secondpage/${item.id}`}>
                    <CardBody className='text-center'>
                        <CardImg src={`http://localhost:3010/${item.img}`} alt='knowledge-base-image' top width='150' height='150' />
                        <p className='text-body mt-1 mb-0'>{item.title}</p>
                    </CardBody>
                </Link>
            </Card>
        </Col>
    )

    // ** Render content based on search term
    const renderContent = () => {
        return data.map(item => {
            const titleCondition = item.title.toLowerCase().includes(searchTerm.toLowerCase())

            if (searchTerm.length < 1) {
                return <Content key={item.id} item={item} />
            } else if (titleCondition) {
                return <Content key={item.id} item={item} />
            } else {
                return null
            }
        })
    }

    return (
        <Fragment>
            <div className='container mt-3'>
                {/* Render header component */}
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                {data !== null ? (
                    <div>
                        {/* Render content based on search term */}
                        <Row className='kb-search-content-info match-height g-3 mt-2'>{renderContent()}</Row>
                    </div>
                ) : null}
            </div>
        </Fragment>
    )
}

export default Firstpage
