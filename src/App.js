import { Row, Col, Card, CardTitle, Slider, Slide, Caption } from 'react-materialize';

function App() {
  return (
    <div>
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: true,
          interval: 6000
        }}
      >
        <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" />}>
          <Caption placement="center">
            <h3>
              This is our big Tagline!
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>

        <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" />}>
          <Caption placement="center">
            <h3>
              This is our big Tagline!
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>

        <Slide image={<img alt="" src="https://besthqwallpapers.com/Uploads/25-3-2019/84708/thumb2-santiago-bernabeu-4k-empty-stadium-real-madrid-stadium-soccer.jpg" />}>
          <Caption placement="center">
            <h3>
              This is our big Tagline!
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>

      </Slider>
      <Row>
        <p>Hot List</p>
        <Col m={3} s={12}>
          <Card className='small'
            header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio</CardTitle>}
          >
            Audio Technical - Mulai dari <span className='red text-black'>Rp. 910 rb</span>
          </Card>
        </Col>
        <Col m={3} s={12}>
          <Card className='small' header={
            <CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg'>
              Handphone
            </CardTitle>}>
            Handphone Samsung - Mulai Dari <label class="red black-text">Rp 200 rb</label>
          </Card>
        </Col>
        <Col m={3} s={12}>
          <Card className='small'
            header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Squishy</CardTitle>}
          >
            Squishy - Mulai dari <span className='red text-black'>Rp. 5,5 rb</span>
          </Card>
        </Col>
        <Col m={3} s={12}>
          <Card className='small' header={
            <CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg'>
              Koleksi The Avenger
            </CardTitle>}>
            Koleksi The Avenger - Mulai dari <span className='red text-black'>Rp. 10 rb</span>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
