const ThreadsAPI = require("threads-api").ThreadsAPI;

// or in Deno 🦖:
// import { ThreadsAPI } from "npm:threads-api";

const main = async () => {
  const threadsAPI = new ThreadsAPI();

  const username = "_junhoyeo";

  // 👤 Details for a specific user
  const userID = await threadsAPI.getUserIDfromUsername(username);
  if (!userID) {
    return;
  }
  const user = await threadsAPI.getUserProfile(username, userID);
  console.log(JSON.stringify(user));
  const posts = await threadsAPI.getUserProfileThreads(username, userID);
  console.log(JSON.stringify(posts));
  const replies = await threadsAPI.getUserProfileReplies(username, userID);
  console.log(JSON.stringify(replies));

  // 📖 Details for a specific thread
  const postID = await threadsAPI.getPostIDfromURL(
    "https://www.threads.net/t/CuX_UYABrr7/?igshid=MzRlODBiNWFlZA=="
  );
  // or use `threadsAPI.getPostIDfromThreadID('CuX_UYABrr7')`
  if (!postID) {
    return;
  }
  const post = await threadsAPI.getThreads(postID);
  console.log(JSON.stringify(post.containing_thread));
  console.log(JSON.stringify(post.reply_threads));

  const likers = await threadsAPI.getThreadLikers(postID);
  console.log(JSON.stringify(likers));
};
main();
