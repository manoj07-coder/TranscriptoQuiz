function groupByFiveMinutes(segments = [], bucketSeconds = 300) {
  const buckets = [];

  if (!segments || segments.length === 0) return buckets;

  let bucketStart = 0;
  let bucketEnd = bucketSeconds;
  let currentText = "";
  let currentIndex = 0;

  for (const seg of segments) {
    while (seg.start >= bucketEnd) {
      if (currentText.trim()) {
        buckets.push({
          index: currentIndex++,
          start: bucketStart,
          end: bucketEnd,
          text: currentText.trim(),
        });
      }
      currentText = "";
      (bucketStart = bucketEnd), (bucketEnd += bucketSeconds);
    }
    currentText += (currentText ? " " : "") + seg.text;
  }

  if (currentText.trim()) {
    buckets.push({
      index: currentIndex,
      start: bucketStart,
      end: bucketEnd,
      text: currentText.trim(),
    });
  }
  return buckets;
}

export default groupByFiveMinutes;
