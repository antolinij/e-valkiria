import React from 'react'

import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';
import Tile from 'react-bulma-components/lib/components/tile';
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Section from 'react-bulma-components/lib/components/section';
import Media from 'react-bulma-components/lib/components/media';
import { boolean } from '@storybook/addon-knobs';
import Button from 'react-bulma-components/lib/components/button';
import { AiOutlineMail } from "react-icons/ai";


import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaHome } from 'react-icons/fa';

import '../static/sass/BrandInfo.scss'

export default function BrandInfo() {
    const style = { textAlign: 'center' };
    return (
        <Container>
            <Tile className="tileAncestor" kind="ancestor">
                <Tile size={12} vertical>
                    <Tile>
                        <Tile kind="parent" vertical>
                            <Box className="boxBrand">
                                <Tile className="brandNameContainer" kind="child">
                                    <Media>
                                        <Media.Item className="brandImage" renderAs="figure" position="left">
                                            <Image rounded={boolean('rounded', true)} size={64} alt="64x64" src="valkirialogo.jpg" />
                                        </Media.Item>
                                    </Media>
                                    <div class="brandName">
                                        <h1 class="brandNameHeader">Valkiria</h1>
                                        <div class="brandNameBody">
                                            Fábrica de cerveza artesanal
                                        </div>
                                    </div>
                                </Tile>
                            </Box>
                            <Tile className="brandSocial is-hidden-mobile" kind="child">
                                <Columns>
                                    <Columns.Column>
                                        <Container className="socialButtons">
                                            <a class="button separator" target="_blank" href="https://www.facebook.com/cervezavalkiria"><FaFacebookSquare size={28}/></a>
                                            <a class="button separator" target="_blank" href="https://www.instagram.com/valkiria_birra/"><FaInstagram size={28}/></a>
                                            <a class="button separator" target="_blank" href="https://api.whatsapp.com/send?phone=5492665030860&text="><FaWhatsapp size={28}/></a>
                                        </Container>
                                    </Columns.Column>
                                </Columns>
                            </Tile>
                        </Tile>
                        <Tile kind="parent" vertical>
                            <Box className="boxBrandData">
                                <Tile className="brandData" kind="child">
                                    <p><FaHome/><span className="textDataInLine"> ENVÍOS A DOMICILIO de 14:00 a 19:00</span><span className="has-text-success"> disponible</span></p>
                                    <p><FaMapMarkerAlt/><span> Salta 1736, General Roca, RN</span></p>
                                    <p><FaPhoneAlt/><span></span> 2984 4433222</p>
                                    <p><AiOutlineMail/><span> valkiria@gmail.com</span></p>
                                    <p><FaRegClock/><span> Sabados de 10:00 a 19:00</span><span className="has-text-success"> abierto ahora</span></p>
                                </Tile>
                            </Box>
                        </Tile>
                    </Tile>
                    <Tile className="brandSocial  is-hidden-desktop" kind="child">
                        <Columns>
                            <Columns.Column>
                                <Container className="socialButtons">
                                    <a class="button separator" target="_blank" href="https://www.facebook.com/cervezavalkiria"><FaFacebookSquare size={48}/></a>
                                    <a class="button separator" target="_blank" href="https://www.instagram.com/valkiria_birra/"><FaInstagram size={48}/></a>
                                    <a class="button separator" target="_blank" href="https://api.whatsapp.com/send?phone=5492665030860&text="><FaWhatsapp size={48}/></a>
                                </Container>
                            </Columns.Column>
                        </Columns>
                    </Tile>
                </Tile>
            </Tile>
        </Container>   
    )
}