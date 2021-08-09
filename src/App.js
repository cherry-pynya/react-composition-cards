import './App.css';

function App() {
  return (
    <div className="App">
      <Card width={'18rem'}>
        <CardImg name='some' />
        <CardBody>
          <CardTitle title='Some Title' />
          <CardSubTitle subTittle='Some subtittle' />
          <CardText text='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem' />
          <CardLink text='link text' />
        </CardBody>
      </Card>
      <Card width={'18rem'}>
        <CardTitle title='Some Title' />
        <CardText text='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem' />
      </Card>
    </div>
  );
}

function CardImg({name}) {
  return (
      <img className='card-img-top' src='https://picsum.photos/200/300' alt={name}></img>
  );
}

function CardTitle({title}) {
  return (
      <h5 className='card-title'>{title}</h5>
  );
}

function CardSubTitle({subTittle}) {
  return (
      <h6 className='card-subtitle mb-2 text-muted'>{subTittle}</h6>
  );
}

function CardText({text}) {
  return (
      <p className='card-text'>{text}</p>
  );
}
function CardLink({text}) {
  return (
      <a href='#' className='card-link'>{text}</a>
  );
}

function CardBody({...props}) {
  return (
      <div className='card-body'>
        {props.children}
      </div>
  );
}

function Card({width, ...props}) {
  return (
      <div className='card' style={{width: width}}>
        {props.children}
      </div>
  );
}

export default App;
