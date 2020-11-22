import React from 'react';
import Faker from 'faker';
import Post from '../components/Post';
import ContainerView from '../components/ContainerView';

const ClubPage = () => {
  const name = "This is a Club";
  const description = "I'm baby unicorn fixie sriracha trust fund succulents vape four dollar toast selfies literally retro neutra meggings. Mlkshk blue bottle salvia man bun green juice cardigan, vice heirloom. Pickled occupy roof party, narwhal bespoke disrupt chillwave. Hot chicken venmo put a bird on it af pitchfork man braid vexillologist edison bulb vaporware pickled drinking vinegar. Mlkshk cold-pressed intelligentsia, cardigan locavore vegan tattooed slow-carb swag man bun. Dummy text? More like dummy thicc text, amirite?";

  return (
    <ContainerView search={true} user={Faker.name.findName()}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-4">{name}</h1>
          <p>{description}</p>
        </div>
        <hr />
        <Post club="blah" timestamp="06/16/2020" red={true}>
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020" red={true}>
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020" red={true}>
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020" red={true}>
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020" red={true}>
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020" red={true}>
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
      </div>
    </ContainerView>
  );
};

export default ClubPage;
