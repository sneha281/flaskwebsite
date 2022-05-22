import tensorflow as tf
import numpy as np
from PIL import Image
from tensorflow.examples.tutorials.mnist import input_data
mnist_data = input_data.read_data_sets("MNIST_data/", one_hot=True)

no_train = mnist_data.train.num_examples
no_validation = mnist_data.validation.num_examples
no_test = mnist_data.test.num_examples