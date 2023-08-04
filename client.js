const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "my-app2",
    brokers: ["192.168.75.111:9092"],
});
