import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/data'

import amplifyOutputs from '@/root/amplify_outputs'

import type { Schema } from '@/amplify/data/resource'

Amplify.configure(amplifyOutputs)

export default generateClient<Schema>()
