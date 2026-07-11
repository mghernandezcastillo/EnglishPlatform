urls=(
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42"
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
  "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5"
)
for url in "${urls[@]}"; do
  echo "$url: $(curl -s -o /dev/null -w "%{http_code}" "$url")"
done
