import React from 'react'
import { Card, Image, Message } from 'semantic-ui-react'

const capitalize = (firstName) => {
    let finalName = '';
    firstName.split("").forEach(function(val, idx) {
        if (idx === 0) {
            finalName += val.toUpperCase();
        } else {
            finalName += val;
        }
    });

    return finalName;
}

const RasiCard = (props) => {
    return (
        <Card.Group>
            <Card fluid>
                <Card.Content>
                    <Image
                    floated='right'
                    size='small'
                    src={props.image}
                    />
                    <Card.Header>{props.name && capitalize(props.name)}</Card.Header>
                    <Message
                        icon='star'
                        header={props.rashi}
                        content="Rasi"
                    />
                    <Message
                        icon='grab'
                        content="Nachhetra"
                        header={props.nachhetra}
                    />
                    <Message
                        icon='leaf'
                        content="Swami"
                        header={props.swami}
                    />
                    <Message
                        icon='globe'
                        content="Barna"
                        header={props.barna}
                    />
                    <Message
                        icon='payment'
                        content="Yoni"
                        header={props.yoni}
                    />
                    <Message
                        icon='like'
                        content="Gad"
                        header={props.gad}
                    />
                    <Message
                        icon='hand point right outline'
                        content="Nadi"
                        header={props.nadi}
                    />
                    <Message
                        icon='sun'
                        content="Aashan"
                        header={props.aashan}
                    />
                </Card.Content>
            </Card>
        </Card.Group>
    );
}

export default RasiCard
