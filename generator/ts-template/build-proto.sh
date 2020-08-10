#!/bin/bash

echo 'please modify PROTO_DIR and PROTO_FILE to locate proto file and remove this line' && exit 1

PROTO_DIR=../../proto
PROTO_FILE=UserManager.proto
PROTO_OUT_DIR=./src/grpc
mkdir -p $PROTO_OUT_DIR
protoc -I=$PROTO_DIR $PROTO_FILE \
    --js_out=import_style=commonjs:$PROTO_OUT_DIR \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:$PROTO_OUT_DIR
echo 'proto file generated'
