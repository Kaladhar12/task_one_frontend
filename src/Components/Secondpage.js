// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components
import Header from './SecondHeader'

// ** Reactstrap Imports
import { Row, Col, CardBody, Collapse, CardHeader, CardTitle } from 'reactstrap'
import { ChevronDown, ChevronRight } from 'react-feather'

// ** Content Component
const Content = ({ item }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Col key={item.id} md='6' sm='6' >
            <div className='w-100 border mb-4'>
                <CardHeader>
                    <CardTitle tag='h4' onClick={() => { setIsOpen(!isOpen) }}>
                        <div className='views cursor-pointer d-inline-block pr-1 ms-3'>
                            {isOpen ? <ChevronDown size='18' /> : <ChevronRight size='18' />}
                        </div>
                        <p className='d-inline-block p-0 m-0 pt-3 pb-2 ms-3'>{item.name}</p>
                    </CardTitle>
                </CardHeader>
                <Collapse isOpen={isOpen}>
                    <hr />
                    <CardBody className='p-1'>
                        <ol>
                            {item.sub_field.map((sub, key) => (
                                <li key={key}>
                                    <Link className='text-decoration-none btn' to={`../description/${item.id}/${sub.id}`}>
                                        {sub.topic}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </CardBody>
                </Collapse>
            </div>
        </Col>
    )
}

// ** Secondpage Component
const Secondpage = () => {
    // ** States
    const { id } = useParams()
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    // ** Fetching data from API
    useEffect(() => {
        axios.get(`http://localhost:3010/subtopics/`).then((res) => {

            const filteredData = res.data.filter((row) => {
                if (row.parentId === parseInt(id)) {
                    return true;
                }
                return false;
            });
            console.log(filteredData)
            setData(filteredData);
        });
    }, [id]);


    // ** Render content based on search term
    const renderContent = () => {
        return data.map(item => {
            const titleCondition = item.name.toLowerCase().includes(searchTerm.toLowerCase())

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
                        <Row className='kb-search-content-info match-height g-3 mt-2 g-2 justify-content-center'>{renderContent()}</Row>
                    </div>
                ) : null}
            </div>
        </Fragment>
    )
}

export default Secondpage
