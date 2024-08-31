import React from 'react'
import Layout from '../../components/layouts/Layout'
import "../../style/Home.css"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from '../Section7'

function Home() {
    return (
        <>
            <Layout>

                {/* Home  Hero_Banner */}
                <Section1 />
                {/* Home  About */}
                <Section2 />
                {/* Home Menu   */}
                <Section3 />
                {/* Home Section Promotion  */}
                <Section4 />
                {/* Home Shop Section */}
                <Section5 />
                {/* Home Blog Section */}
                <Section6 />
                {/* Home Contact Section */}
                <Section7 />

            </Layout>
        </>
    )
}

export default Home