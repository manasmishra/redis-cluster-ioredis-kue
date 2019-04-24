module.exports = {
  kafkaBrokerURL: (process.env.KAFKA_HOST || 'ec2-3-88-35-67.compute-1.amazonaws.com:9092'),
  topic: (process.env.KAFKA_TOPIC || 'csfxtickdatatest')
}