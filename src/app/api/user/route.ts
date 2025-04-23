import { NextRequest, NextResponse } from 'next/server'
import getCurrentUser from '../../../actions/getCurrentUser'

export async function GET(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser()


    return NextResponse.json(currentUser, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
