import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import sanity, {urlFor} from '../sanity';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanity.fetch('*[_type == "post"]').then(data => {
      setPosts(data);
    });
  }, []);

  console.log(posts);
  return (
    <View>
      {posts.map(item => (
        <View>
          <Text key={item._id}>{item.title}</Text>
          <Image
            source={{uri: urlFor(item.mainImage).url()}}
            style={{
              alignSelf: 'center',
              width: 200,
              height: 200,
              borderRadius: 20,
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default Home;
