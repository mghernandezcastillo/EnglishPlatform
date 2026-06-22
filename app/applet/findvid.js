const search = async () => {
  const res = await fetch('https://www.youtube.com/results?search_query=colors+for+kids+english');
  const text = await res.text();
  const match = text.match(/"videoId":"([^"]+)"/g);
  if (match) {
    console.log(match.slice(0, 10).join('\n'));
  }
}
search();
