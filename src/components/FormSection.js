import React from 'react';
import './FormSection.css';
import returnDetail from './RasiFind.js';
import RasiCard from './RasiCard.js';
import { Input } from 'semantic-ui-react'

class TypeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailJSON: []
        };

        this.findDetails = (obj) => {
            if (obj.key === "Enter") {
                let birthName = obj.target.value;

                this.setState(prevState => ({
                    detailJSON: returnDetail(birthName)
                }));
            }
        }
    }

    render() {
        let detailValues = this.state.detailJSON;
        return(
            <div className="section__form">
                <div className="section__details">
                    <Input icon='users' focus fluid iconPosition='left' onKeyUp={this.findDetails.bind(this)} placeholder='Your Birth Name...(da - daal, Da - Dadu, yna - Goru Singhe Yna, nga - Nang ko nga, nda - Ada)' />
                    <div className="section__rasiDetails">
                        <RasiCard {...detailValues} />
                    </div>
                </div>
            </div>
        );
    };
}

export default TypeSection;