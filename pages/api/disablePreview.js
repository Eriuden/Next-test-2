
export const handler = (req,res) => {
  res.clearPreviewData({user:"BOEUF"})
  res.end("preview mode disabled")
}
