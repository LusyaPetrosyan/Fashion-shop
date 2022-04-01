import { Button, Card, Icon, Image } from 'semantic-ui-react'
import "./cardItem.css";
import {Link} from "react-";
import

function CardItem({description, image, name, price}){
    return (
        <Card centered>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>{description.comment}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          {price}
          {isAuthenticated ? (
          <BuyProduct />
        ) : (
          <Button as={Link} to="/login">
            BUY
          </Button>
        )}
            {/* <a>
              <Icon name='user' />
              22 Friends
            </a> */}
          </Card.Content>
        </Card>
      );
}

export default CardItem;