import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Card, CardBody, CardTitle, Row, CardHeader } from 'reactstrap'
import illustration from '../assets/images/desc.svg'

const Description = () => {
    const [data, setData] = useState({
        desc: null,
        id: null,
        topic: null
    })
    const { sid, id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3010/subtopics/`).then((res) => {

            const dataRow = res.data.find(row => {
                
                if (row.parentId === parseInt(sid)) {
                   return row;
                }
                return undefined
            });

            if (dataRow !== undefined) {
                const data1 = dataRow.sub_field.find(row => {
                    if (row.id === parseInt(id)) {
                       return row;                      
                    }
                    return undefined
                })

                if (data1 !== undefined) {
                    setData(data1)
                }
            }

        })
    }, [sid, id])

    return (
        <Col sm='6' className='container mt-2' >
        <Card>
            <CardHeader className='pb-0'>
                <CardTitle tag='h4'>{data.topic}</CardTitle>
            </CardHeader>
            <Row>
                <Col md={{ size: 5, order: 0 }} xs={{ size: 12, order: 1 }}>
                    <CardBody>
                    {data.desc}
                    </CardBody>
                </Col>
                <Col md={{ size: 7, order: 1 }} xs={{ size: 12, order: 0 }}>
                    <div className='text-center'>
                        <img className='text-center' src={illustration} alt='illustration' width='310' />
                    </div>
                </Col>
            </Row>
        </Card>
        </Col>
    )
}

export default Description;