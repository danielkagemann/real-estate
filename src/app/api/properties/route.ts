import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const location = searchParams.get('location')?.toLowerCase()
  const type = searchParams.get('type')
  const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined

  let query = 'SELECT * FROM properties WHERE 1=1'
  const params: any[] = []

  if (location) {
    query += ' AND LOWER(location) LIKE ?'
    params.push(`%${location}%`)
  }

  if (type) {
    query += ' AND type = ?'
    params.push(type)
  }

  if (maxPrice) {
    query += ' AND price <= ?'
    params.push(maxPrice)
  }

  const stmt = db.prepare(query)
  const properties = stmt.all(...params)

  return NextResponse.json(properties)
}