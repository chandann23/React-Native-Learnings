import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ActivityIndicator, View, StyleSheet, StatusBar, FlatList, ListRenderItem, TextInput, Button } from 'react-native';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Index() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async ({ limit = 10 }: { limit?: number } = {}) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data: Post[] = await response.json();
      setPostList(data);
      console.log(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setError("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchData({ limit: 20 });
    setIsRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
        }),
      });
      const newPost: Post = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle('');
      setPostBody('');
      setIsPosting(false);
      setError(null);
    } catch (error) {
      console.error('Error adding post:', error);
      setError('Error adding post');
      setIsPosting(false);
    }
  };

  const renderItem: ListRenderItem<Post> = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.bodyText}>{item.body}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View><Text>{error}</Text></View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={postTitle}
              onChangeText={(text) => setPostTitle(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Body"
              value={postBody}
              onChangeText={(text) => setPostBody(text)}
            />
            <Button
              title={isPosting ? "Posting..." : "Post"}
              disabled={isPosting}
              onPress={addPost}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList<Post>
              data={postList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => (
                <View style={{ height: 16 }} />
              )}
              ListFooterComponent={() => (
                <Text style={styles.footerHeaderText}>List Footer</Text>
              )}
              ListHeaderComponent={() => (
                <Text style={styles.footerHeaderText}>List Header</Text>
              )}
              ListEmptyComponent={() => (
                <Text style={styles.emptyText}>No data</Text>
              )}
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 16,
  },
  footerHeaderText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 16,
  },
  emptyText: {
    fontSize: 20,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
